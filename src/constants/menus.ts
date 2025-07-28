import data from "../../public/data.json"

const districts : number[] = [];

const typelist : string[] = [];

const housinglist : string[] = [];

data.forEach(obj => {
    if (obj.district && !districts.includes(obj.district)) districts.push(obj.district);

    if(obj.projectType && !typelist.includes(obj.projectType)) typelist.push(obj.projectType);

    if(obj.housingType && !housinglist.includes(obj.housingType)) housinglist.push(obj.housingType);
});

export {
    districts,
    typelist,
    housinglist
}

