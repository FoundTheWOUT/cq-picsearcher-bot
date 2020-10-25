import NamedRegExp from 'named-regexp-groups';

function sendBoss(context, replyFunc) {
  const bossReg = new NamedRegExp(global.config.bot.regs.boss);
  const bossExec = bossReg.exec(context.message);

  if (bossExec) {
    const regGroup = bossExec.groups || {};
    const bossNum = `${regGroup.times.toLowerCase()}${regGroup.bossnum}`;

    let url = global.config.bot.boss[bossNum];
    if (url != '') {
      replyFunc(context, url);
    } else {
      replyFunc(context, global.config.bot.replys.noneBoss);
    }
    return true;
  }
  return false;
}

export default sendBoss;
