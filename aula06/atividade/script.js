function changeStyle(style) {
    const div = document.getElementById('styledDiv');
    
    // Define diferentes estilos
    const styles = {
        style1: {
            backgroundColor: 'lightcoral',
            color: 'white',
            width: '300px',
            padding: '20px',
            borderRadius: '15px'
        },
        style2: {
            backgroundColor: 'lightblue',
            color: 'black',
            width: '250px',
            padding: '15px',
            borderRadius: '10px'
        },
        style3: {
            backgroundColor: 'lightgreen',
            color: 'darkgreen',
            width: '200px',
            padding: '10px',
            borderRadius: '5px'
        },
        style4: {
            backgroundColor: 'lightyellow',
            color: 'darkgoldenrod',
            width: '350px',
            padding: '25px',
            borderRadius: '20px'
        },
        style5: {
            backgroundColor: 'lightpink',
            color: 'darkred',
            width: '300px',
            padding: '20px',
            borderRadius: '25px'
        },
        style6: {
            backgroundColor: 'lightgray',
            color: 'blue',
            width: '250px',
            padding: '15px',
            borderRadius: '10px'
        }
    };

    // Aplica o estilo escolhido
    const selectedStyle = styles[style];
    for (const property in selectedStyle) {
        div.style[property] = selectedStyle[property];
    }
}
