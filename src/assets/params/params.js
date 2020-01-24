module.exports = {
  path:
    process.env.NODE_ENV === "production"
      ? "https://cuatrop.com/ProyectoValentiApi/public/"
      : "http://localhost/ProyectoValentiApi/public/"
};
