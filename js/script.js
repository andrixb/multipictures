var imageGenerator = {


    container: document.getElementsByClassName('container')[0],
    fileSource: [],
    sourceLength: 19,
    basePath: '/imgs/barceloneta/JPEG/',
    random: true,
    opacityFactor: Math.floor(Math.random() * 700),

    generateSrc: function() {
        for (var i = 1; i < 10; i++)
            this.fileSource.push(this.basePath + '00' + i + '.jpg');

        for (var i = 10; i <= this.sourceLength; i++)
            this.fileSource.push(this.basePath + '0' + i + '.jpg');
    },

    createElements: function() {
        this.generateSrc();

        for (var i = 0; i < this.sourceLength; i++) {
            var l = document.createElement('img');
            this.container.appendChild(l);
        }
    },

    appendProperties: function() {
        var image = document.getElementsByTagName('img');

        this.createElements();

        for (var i = 0; i < this.sourceLength; i++) {
            image[i].setAttribute('class', 'images');
            image[i].setAttribute('id', 'picture__' + i);
            image[i].style.opacity = (this.opacityFactor / this.sourceLength) / 100;
            // 170 157 308
            console.log(this.opacityFactor);
        }

        if (this.random)
            this.addRandomSrc(image);
        else
            this.addLinearSrc(image);
        
        return true;
    },

    addLinearSrc: function(image) {
        var i = 0;

        while (i <= this.fileSource.length) {
            // if( typeof image[i] !== undefined )
            image[i].setAttribute('src', this.fileSource[i]);
            i++;
        }
    },

    addRandomSrc: function(image) {
        var i = 0;

        while (i <= this.fileSource.length) {
            if (typeof image[i] !== undefined)
                image[i].setAttribute('src', this.fileSource[ Math.floor(Math.random() * this.sourceLength) ]);

            i++;
        }
    },

    generateImage: function() {
        this.appendProperties();
    },


    init: function() {
        this.generateImage();
    }
};

document.addEventListener('DOMContentLoaded', function() {
    imageGenerator.init();
});
