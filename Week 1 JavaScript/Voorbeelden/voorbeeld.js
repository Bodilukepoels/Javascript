function LeftOnRead(You){
    return (You ? 'You got left on read' : 'She did nnot leave you on read');
}

console.log(LeftOnRead(true));
console.log(LeftOnRead(false));
console.log(LeftOnRead(null));