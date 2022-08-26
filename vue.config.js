const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  devServer:{
    host: '0.0.0.0',
    port: '8080',
    proxy:
    {
      '/api': {
        target:'https://pd.musicapp.migu.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      
    }
  }
  
    
  
  
})
