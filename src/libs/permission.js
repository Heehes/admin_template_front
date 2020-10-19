export function Check(key){
    console.log(key)
    if(key){
        let powerArr = ['personal','masterData','TestPage01'];
        let index = powerArr.indexOf(key);
        if(index > -1)
            return true
        else
            return false
    }
    return true
}