const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day ==='tuesday') {
      return 7
    } else if (day ==='wednesday') {
      return 6
    } else if (day === 'thursday') {
      return 9
    } else if (day === 'friday') {
      return 7
    } else if (day === 'saturday') {
      return 7
    } else if (day === 'sunday'){
      return 8
    } else {
      return 'Error!'
    }
  };
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday')
  
    
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
    console.log('You\'ve got the perfect amount of sleep!')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.') 
  } else {
    console.log('Error! Something went wrong, check your code.')
  }
  }
  calculateSleepDebt()
  
  
  
  
  