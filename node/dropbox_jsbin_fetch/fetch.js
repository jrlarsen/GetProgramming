/**
 * Created by jlarsen on 01/03/15.
 * Get jsBin files from DropBox
 * Save to correct folders
 */

var fs = require('fs'),
    http = require('http'),
    dbPath = "/Users/jlarsen/Dropbox/apps/jsbin",
    localPath = '/Users/jlarsen/Documents/Development/AdventuresInCode/';

function processFile(fileCode, fileText, next) {
   var listing = fileText.match(/Listing (\d+)\.(\d+)/);
   if (listing) {
      fs.writeFile(localPath + 'Chpt' + listing[1] + '/listing' + listing[1] + '.' + listing[2] + '.js', fileText, function (err) {
         if (err) {
            console.log('Error saving ' + fileCode + ', Listing ' + listing[1] + '.' + listing[2]);
         } else {
            console.log('Saved ' + fileCode + ', Listing ' + listing[1] + '.' + listing[2]);
         }
         next();
      });
   } else {
      next();
   }
}

function getFile(fileCode, next) {

   http.get('http://jsbin.com/' + fileCode + '.js', function (res) {
      var output = '// jsbin.com/' + fileCode + '/edit?js,console\n';

      res.setEncoding('utf8');

      res.on('data', function (chunk) {
         output += chunk;
      });

      res.on('end', function () {
         processFile(fileCode, output, next);
      });

      res.on('error', function (e) {
         console.log(e);
         next();
      });
   });

}

function fetchJS(fileCodes) {
   var filesToGet = fileCodes.length,
       currentFile = 0;

   function getNext () {
      currentFile++;
      if (currentFile < filesToGet) {
         getFile(fileCodes[currentFile], getNext);
      }
   }

   getFile(fileCodes[currentFile], getNext);
}

fs.readdir(dbPath, function (err, files) {
   var jsBinFiles = [];

   if (err) {
      console.log(err);
   } else {
      files.forEach(function (file) {
         if (file.indexOf('.html') !== -1) {
            jsBinFiles.push(file.split('.')[0]);
         }
      });
      console.log(jsBinFiles.length + ' files found');
      fetchJS(jsBinFiles);
   }
});