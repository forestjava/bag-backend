import { invalidate } from '../../components/providers/DataAccessProvider';
import redundants from '../../utils/redundants';
import { useXForm } from '../../utils/xform';

import {
  useUserQuery,
  UserCreateInput,
  UserUpdateInput,
  useCreateOneUserMutation,
  useDeleteOneUserMutation,
  useUpdateOneUserMutation,
} from '../generated';

const LIST_QUERY_KEY = 'Users';
const ITEM_QUERY_KEY = 'User';

export const useUserForm = (id?: number) => {
  const isCreate = !id;

  const key = { id };

  const { data, isLoading } = useUserQuery({ where: key }, { enabled: !isCreate });

  const form = useXForm({ defaultValues: data?.user, disabled: isLoading && !isCreate });

  const create = useCreateOneUserMutation().mutateAsync;
  const update = useUpdateOneUserMutation().mutateAsync;
  const remove = useDeleteOneUserMutation().mutateAsync;

  const createElement = async () => {
    const input: UserCreateInput = {};
    
      
    input.username = form.values.username;
      
      
        
    
      
    input.lastName = form.values.lastName;
      
      
        
    
      
    input.firstName = form.values.firstName;
      
      
        
    
      
    input.email = form.values.email;
      
      
        
    
      
      
    input.role = { connect: { id: form.values.role?.id } };
      
        
    
      
      
      
    input.groups = { connect: form.values.groups?.map((item) => ({ id: item.id })) };
        
    
    await create({ data: input });
    await invalidate(LIST_QUERY_KEY);
    form.close();
  };

  const updateElement = async () => {
    const input: UserUpdateInput = {};
    
      
    input.username = { set: form.values.username };
      
      
      
    
      
    input.lastName = { set: form.values.lastName };
      
      
      
    
      
    input.firstName = { set: form.values.firstName };
      
      
      
    
      
    input.email = { set: form.values.email };
      
      
      
    
      
      
    input.role = { connect: { id: form.values.role?.id } };
      
      
    
      
      
      
    input.groups = {
      connect: redundants(form.values.groups, data?.user?.groups)?.map((item) => ({ id: item.id })),
      disconnect: redundants(data?.user?.groups, form.values.groups)?.map((item) => ({ id: item.id })),
    };
      
    
    await update({ where: key, data: input });
    await invalidate(LIST_QUERY_KEY);
    await invalidate(ITEM_QUERY_KEY);
    form.close();
  };

  const removeElement = async () => {
    await remove({ where: key });
    await invalidate(LIST_QUERY_KEY);
    form.close();
  };

  const submit = () => {
    if (isCreate) createElement();
    else updateElement();
  };

  return {
    isCreate,
    input: form.input,
    button: form.button,
    create: createElement,
    remove: removeElement,
    update: updateElement,
    submit: form.handleSubmit(submit),
    values: form.values,
    reset: form.reset,
    modified: form.modified,
    close: form.close,
  };
};
