/*
if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is NOT true');
}

const x = 10;
const y = 5;

if ( x > y) {
    console.log(`${x} is greater than ${y}`);
}


if ( x === y) {
    console.log(`${x} is equal to ${y}`);
    } else {
        console.log(`${x} is NOT equal to ${y}`);
    }


    //IF ELSE

    const d = new Date(10, 30, 2022, 6, 0, 0);
    const hour = d.getHours();

    if (hour < 12) {
        console.log('Good Morning');
      }  else if (hour < 18) {
        console.log('Good Afternoon');
      } else {
        console.log('Good Night');
      }
    
      

     // NESTED IF 

     if (hour < 12) {
        console.log('Good Morning');

        if( hour === 6) {
            console.log('Wake Up!');
        }
    }   else if (hour < 18) {
            console.log('Good Afternooon');
        } else {
            console.log('Good Night');

            if (hour >= 20) {
                console.log('zzzzzzzzz');
            }
        }
    
        //Multiple condition
        if (hour >= 7 && hour < 15) {
            console.log('It is work time!');
        }

        if (hour === 6 || hour === 20) {
            console.log('Brush your teeth');
        }
*/

        //SWITCH STATEMENTS


        const d = new Date(2022, 1, 10, 19, 0, 0);
        const month = d.getMonth();
        const hour = d.getHours();

        switch (month) {
            case 1:
                console.log('It is January');
                break;
                case 2:
                    console.log(`It is February`);
                    break;
                    case 3:
                        console.log(`It is March`);
                        break;
                        default:
                            console.log('It is not Jan, Feb or March');

        }


        switch (true) {
            case hour < 12:
            console.log('Good Morning');
            break;
            case hour < 18:
                console.log('Good Afternoon');
                break;
                default:
                console.log('Good Night');
            
        }