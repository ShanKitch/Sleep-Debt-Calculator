const getSleepHours = day => {
    if (day === 'monday'){
      return 11;
    } else if (day === 'tuesday'){
      return 11;
    } else if (day === 'wednesday'){
      return 10;
    } else if (day === 'thursday'){
      return 11;
    } else if (day ==='friday'){
      return 11;
    } else if (day === 'saturday'){
      return 12;
    } else if (day === 'sunday'){
      return 9;
    } else{
      return 'Invalid Day';
    }
  };
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours ('thursday')+ getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  function getIdealSleepHours(){
    var idealHours= 10;
    return idealHours *7;
  };
  
  const calculateSleepDebt = ()=> {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('You got ' + (idealSleepHours) + 'this week. You slept the perfect amount!');
    }
    if (actualSleepHours < idealSleepHours){
      console.log('You got ' + (idealSleepHours-actualSleepHours) + ' hour(s) less than you needed this week. Get some rest!')
    }
    if (actualSleepHours > idealSleepHours){
     console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more than you needed this week. You must have been tired!')
    } 
  };
  calculateSleepDebt();