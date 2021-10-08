const functions = require('./07');

describe('People Array',()=>{
  it('has at least one person 19 or older',()=>{
    expect(functions.isAdult).toBe(true);
  });
  it('does not have everyone 19 or older',()=>{
    expect(functions.allAdult).toBe(false);
  });
});

describe('Comments Array',()=>{
  it('has a comment with the ID of 823423 that reads "Super good"',()=>{
    expect(functions.comment.text).toBe("Super good");
  });
  it('has a comment with the ID of 823423 which is index 1',()=>{
    expect(functions.index).toBe(1);
  });
})

describe('newComments Array',()=>{
  it('does not contain comment with ID of 823423',()=>{
    expect(functions.newComments.includes(comment => comment.id === 823423)).toBe(false);
  });
})

  