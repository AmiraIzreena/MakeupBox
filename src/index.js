const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
 
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'justforu.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

function buttonClicked(){
  var brands = document.getElementById("brands").value
  var category = document.getElementById("category").value
  fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brands}&product_type=${category}`)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
            if(data[0]!=null){
                document.getElementById("info").removeAttribute("hidden")
                if (data[0].brand != null){
                      document.getElementById("displayb").innerHTML=data[0].brand
                  }
                  else{
                      document.getElementById("displayb").append("Not Available")
                  }     
                if (data[0].product_type != null){
                        document.getElementById("displayc").innerHTML=data[0].product_type
                    }
                    else{
                        document.getElementById("displayc").append("Not Available")
                    }                
                if (data[0].name != null){
                        document.getElementById("name").innerHTML=data[0].name
                    }
                if (data[0].description != null){
                        document.getElementById("desc").innerHTML=data[0].description
                    }
                    else{
                        document.getElementById("desc").append("Not Available")
                    }
                 if (data[0].price != null){
                        document.getElementById("price").innerHTML=data[0].price
                    }
                    else{
                        document.getElementById("price").append("Not Available")
                    }
                 if (data[0].product_link != null){
                        document.getElementById("web").innerHTML=data[0].product_link
                    }
                    else{
                        document.getElementById("web").append("Not Available")
                    }
                }
            if(data[0]!=null){
              document.getElementById("info").removeAttribute("hidden")
              if (data[1].brand != null){
                    document.getElementById("displayb1").innerHTML=data[1].brand
                }
                else{
                    document.getElementById("displayb1").append("Not Available")
                }     
              if (data[1].product_type != null){
                      document.getElementById("displayc1").innerHTML=data[1].product_type
                  }
                  else{
                      document.getElementById("displayc1").append("Not Available")
                  }                
              if (data[1].name != null){
                      document.getElementById("name1").innerHTML=data[1].name
                      
                  }
              if (data[1].description != null){
                      document.getElementById("desc1").innerHTML=data[1].description
                  }
                  else{
                      document.getElementById("desc1").append("Not Available")
                  }
               if (data[1].price != null){
                      document.getElementById("price1").innerHTML=data[1].price;
                  }
                  else{
                      document.getElementById("price1").append("Not Available")
                  }
               if (data[1].product_link != null){
                      document.getElementById("web1").innerHTML=data[1].product_link
                  }
                  else{
                      document.getElementById("web1").append("Not Available")
                  }
              }
            else{
              alert("Product Not Available. Please exit and try again!!")
            }
          })
        }