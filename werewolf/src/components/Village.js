import React from 'react';

// 人狼を生成する
const alreadyGotWerewolf = []
function werewolfFactory(werewolfLen, villagerLen) {
  const werewolves = []
  while(werewolves.length < werewolfLen) {
    const werewolf = Math.floor(Math.random() * villagerLen)
    if(!alreadyGotWerewolf.includes(werewolf)) {
      alreadyGotWerewolf.push(werewolf)
      werewolves.push(werewolf)
    }
  }
  return werewolves;
}

function Village(props) {
  const { villageId, villagerLen, werewolfLen } = props
  const villagers = []
  for(let i = 0; i < villagerLen; i++) {
    villagers.push(i)
  }
  const werewolves = werewolfFactory(werewolfLen, villagerLen)
  console.log(werewolves)

  return (
    <div id={`village-${villageId}`} className="village">{
      villagers.map((v,i) => {
        return werewolves.includes(v) ?
          <div key={i} className="werewolf" id={`v-${v}`}>{v + 1}</div> :
          <div key={i} className="villager" id={`v-${v}`}>{v + 1}</div>
      })
    }</div>
  )
}

export default Village