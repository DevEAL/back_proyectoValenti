module.exports = {
  path:
    process.env.NODE_ENV === "production"
      ? "http://64.227.10.191/ProyectoValentiApi/public/"
      : "http://localhost/ProyectoValentiApi/public/"
};
