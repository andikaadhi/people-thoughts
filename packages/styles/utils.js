export const setTextSize = (size) => {
    switch (size) {
        case 'small' : 
            return 'font-size: 14px;'
        case 'large' : 
            return 'font-size: 18px;'
        default :
            return 'font-size: 16px;'
    }
}

export const setHeadingSize = (type) => {
    switch (type) {
        case 'h1' : 
            return 'font-size: 60px;'
        case 'h2' : 
            return 'font-size: 50px;'
        case 'h3' : 
            return 'font-size: 40px;'
        case 'h4' :
            return 'font-size: 30px'
        case 'h5' :
            return 'font-size: 24px'
        default :
            return 'font-size: 30px'
        
    }
}

export const setTextStyle = (bold) => {
    return (bold) ? 'bold' : 'font-weight: 300;' 
}
