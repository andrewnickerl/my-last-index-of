const myLastIndexOf = (array, searchValue, startIdx) =>
{
    let slicedArray = []
    let index = 0
    if(!!startIdx)
    {
        slicedArray = array.slice(0, startIdx)
        if (slicedArray.indexOf(searchValue) > -1)
        {
            for (let i = slicedArray.length; i > 0; i--)
            {
                if (slicedArray[i] === searchValue) index = i;
            }
            return index;
        }
        else return -1;
    } 
    else 
    {
        if (array.indexOf(searchValue) > -1)
        {
            for (let i = 0; i < array.length; i++)
            {
                if (array[i] === searchValue) index = i;
            }
            return index;
        }
        else return -1;
    }
}

console.log(myLastIndexOf([6, 8, 4, 5, 5, 9], 5, 4))