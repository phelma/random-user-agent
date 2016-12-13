'use strict';

let data = require('./useragents.json');

let getRandom = (max) => {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
};

module.exports = (type) => {
  let group;
  let groupLists = [];
  let list = [];
  if (type){
    group = data.find((group) => group.type === type);
    groupLists = group.list;
  } else {
    data.forEach((group) => {
      groupLists = groupLists.concat(group.list);
    });
  }

  groupLists.forEach((item) => {
    list = list.concat(item.useragents);
  });

  let n = getRandom(list.length);

  return list[n].useragent;
};
