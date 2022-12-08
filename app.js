const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 960 / amtOfGrids
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.addEventListener('mouseenter', () => {
                const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
                let random = Math.floor(Math.random() * colorArray.length);
                let color = colorArray[random]; 

                gridBox.style.backgroundColor = color;
            })
            row.appendChild(gridBox)            
        }

        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('New grid size:'))

    while (userSize > 100) {
        userSize  = Number(prompt('Too large, please select a number under 100:'))
        
    }

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        createGrid(userSize);
    } else {
        wrapper.remove()
        createGrid(userSize)
    }
})