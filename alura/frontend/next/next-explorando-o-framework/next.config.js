module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        sources: "/perguntas",
        destination: "/faq",
        permanent: true
      }
    ]
  }
}