// import { useEffect, useState } from 'react';

// export const UseLocalStorage = (storageKey, defaultValue) => {
//   const [formData, setFormData] = useState(defaultValue);
//   console.log('formData:', formData);
//   useEffect(() => {
//     try {
//       const storedData = localStorage.getItem(storageKey);
//       if (storedData) {
//         setFormData(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }, [storageKey]);
//   useEffect(() => {
//     try {
//       localStorage.setItem(storageKey, JSON.stringify(formData));
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }, [formData, storageKey]);
//   return [formData, setFormData];
// };

// Usage
// import { UseLocalStorage } from './localStorage';
