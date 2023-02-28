// import axios from "axios";

export const getSaldo = async (user = true) => {
  if (user) {
    const res = await miGet();
    return res.data;
  }
};

function miGet() {
  return new Promise((resolve, reject) => {
    // Aquí es donde se realiza el trabajo asíncrono
    // ...

    // Si el trabajo se realiza correctamente, llama a resolve
    resolve({
      data: {
        monto: 3000,
      },
    });

    // Si se produce un error, llama a reject
    reject(error);
  });
}
