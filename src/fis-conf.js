fis.match('::package', {
    spriter: fis.plugin('csssprites-group')
});

fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('css/*.css',{
    postprocessor : [fis.plugin("autoprefixer",{
        // https://github.com/ai/browserslist#queries
        "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
        "gradientfixer": true
    })]
})
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
})

fis.match('*.es6', {
  rExt: '.js',
  parser: fis.plugin('es6-babel')
});


// 开启模块化开发
fis.hook('module');
fis.match('*.es6', {
  isMod: true
});

fis.match('::package', {
  postpackager: fis.plugin('loader')
});
