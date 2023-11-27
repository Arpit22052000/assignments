let day = "Saturda"

switch (day) {
    case 'Monday':
        console.log('7 AM');
        break;
    
    case 'Tuesday':
    case 'wednesday':
    case 'Thrusday':
        console.log('4 AM');
        break;
    
    case 'Friday':
        console.log('9 AM');
        break;
    
    case 'Saturday':
    case 'Sunday':
        console.log('8 AM');
        break;
    
    default:
        console.log('7 AM - watch Telusko videos');
}