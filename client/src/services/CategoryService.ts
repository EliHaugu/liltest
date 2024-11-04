import type { DeviceCategory } from '@/types/DeviceTypes';

/**
 * @returns list of categories (DeviceCategories) received from the server
 */
export async function fetchCategories(): Promise<DeviceCategory[]> {
  const requestOptions = {
    method: 'GET'
  };

  const response = await fetch(`http://127.0.0.1:8000/data_manager/api/categories`, requestOptions).then((response) => {
    return response.json();
  });

  return response.map(mapCategory);
}

/**
 * @param category category (DeviceCategory) to create, containing all the needed fields
 * @returns true if response is 200/OK, signifying that the category was created successfully
 */
export async function createCategory(category: Partial<{ category_name: string, connection_types: string[]}>): Promise<Boolean> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category)
  };
  return (await fetch(`http://127.0.0.1:8000/data_manager/api/categories/`, requestOptions)).ok;
}

/**
 * @param id ID of the category to delete
 * @returns true if response is 200/OK, signifying that the category was deleted successfully
 */
export async function deleteCategory(name: string): Promise<Boolean> {
  const requestOptions = {
    method: 'DELETE'
  };
  return (await fetch(`http://127.0.0.1:8000/data_manager/api/categories/${name}/`, requestOptions)).ok;
}

/**
 * @param id ID of the category to update
 * @param category updated category object
 * @returns true if response is 200/OK, signifying that the category was updated successfully
 */
export async function updateCategory(name: string, category: Partial<DeviceCategory>): Promise<Boolean> {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category)
  };
  return (await fetch(`http://127.0.0.1:8000/data_manager/api/categories/${name}/`, requestOptions)).ok;
}

const mapCategory = (category: { category_name: string, connection_types: string[], communication_protocols: string[] }): DeviceCategory => {
  return {
    name: category.category_name,
    connectionTypes: category.connection_types,
    communicationProtocols: category.communication_protocols
  };
}