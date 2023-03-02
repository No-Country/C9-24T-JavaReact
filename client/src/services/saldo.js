import instance from "./configAxios";

export const getSaldo = async () => {
  const res = await instance.get("/usuario/estudiante");
  return res.data;
};

// function miGet() {
//   return new Promise((resolve, reject) => {
//     // Aquí es donde se realiza el trabajo asíncrono
//     // ...

//     // Si el trabajo se realiza correctamente, llama a resolve
//     resolve({
//       data: {
//         monto: 3000,
//       },
//     });

//     // Si se produce un error, llama a reject
//     reject(error);
//   });
// }
