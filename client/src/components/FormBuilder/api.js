//client/src/components/FormBuilder/api.js
import axios from '../helpers/axiosConfig';

const API_BASE_URL = 'http://localhost:5000/api';

export const getForms = async () => {
	try {
		const response = await axios.get('/api/formBuilder');
		console.log('API response:', response); // Log the complete response object
		if (!response.data) {
			console.error('Fetched forms data is undefined');
			return [];
		}
		return response.data;
	} catch (error) {
		console.error('Error getting forms:', error);
		throw error;
	}
};

export const updateForm = async (formData) => {
	try {
		const response = await axios.put(
			`/api/formBuilder/${formData._id}`,
			formData
		);
		return response.data;
	} catch (error) {
		console.error('Error updating form:', error);
		throw error;
	}
};

export async function saveFormData(formId, data) {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/formBuilder/${formId}/responses`,
			data
		);
		return response.data;
	} catch (error) {
		console.error(error);
		return { success: false };
	}
}
