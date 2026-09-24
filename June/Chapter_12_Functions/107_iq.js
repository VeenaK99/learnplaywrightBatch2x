function runtest (name,status,duration){
    return `${name}:${status},${duration}`;
}

const r = runtest("Logout","pass",345);

console.log(r);