module.exports = {
    async rewrites() {
      return [
        {
          source: "/ar/ar_content",
          destination: "/index.html",
        },
      ]
    }
  }
  