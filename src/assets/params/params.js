module.exports = {
  path:
    process.env.NODE_ENV === "production"
      ? "https://proyectovalenti.com/public"
      : "http://localhost/ProyectoValentiApi/public/"
};
