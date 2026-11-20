// data/achievements.js
// Achievement definitions + generic evaluator.
// Achievements read canonical Person IDs / Group IDs; they never compare raw display names.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};

  const achievements = [
  {
    "id": "achievement_b306bdd8-6a17-4425-b01b-3c2fe3ed70b3",
    "title": "One In A Million",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "cover_all_group_members",
        "groupId": "twice"
      }
    ],
    "description": "Cover every officially debuted member of TWICE. Count roles in this group.",
    "icon": "🏆"
  },
  {
    "id": "achievement_ca25c91b-398f-4e4a-8063-2e4f7dde9cf1",
    "title": "Wonheelary",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "artist_times",
        "target": 6,
        "scopeGroup": "illit",
        "personId": "wonhee"
      }
    ],
    "description": "Cover Wonhee’s role in 6 different performances. Group: ILLIT.",
    "icon": "🏆"
  },
  {
    "id": "achievement_7f2d57ba-9944-4496-8055-9dd89341fa46",
    "title": "Who's your bias?",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "group_songs",
        "target": 10,
        "groupId": "illit"
      }
    ],
    "description": "Cover 10 different songs by ILLIT.",
    "icon": "🏆"
  },
  {
    "id": "achievement_a8b4338e-e0b5-4c35-b4c1-522bfc97f1fa",
    "title": "Rescene, Yaho!",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "group_songs",
        "target": 5,
        "groupId": "rescene"
      }
    ],
    "description": "Cover 5 different songs by RESCENE.",
    "icon": "🏆"
  },
  {
    "id": "achievement_43af618d-5956-4238-8303-d2b709c4ee18",
    "title": "It's Going Down!",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "group_songs",
        "target": 5,
        "groupId": "stayc"
      }
    ],
    "description": "Cover 5 different songs by STAYC.",
    "icon": "🏆"
  },
  {
    "id": "achievement_1db44956-523b-4d8c-be08-c5fdb7fe8931",
    "title": "Kpop Trainee",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "distinct_songs",
        "target": 50
      }
    ],
    "description": "Cover 50 different songs.",
    "icon": "🏆"
  },
  {
    "id": "achievement_33ebc591-5985-4780-a838-2a49334ccecc",
    "title": "Kpop Idol",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "distinct_songs",
        "target": 100
      }
    ],
    "description": "Cover 100 different songs.",
    "icon": "🏆"
  },
  {
    "id": "achievement_5125fc23-456d-475d-837d-076624aa58aa",
    "title": "Kpop Choreographer",
    "type": "rule_set",
    "match": "all",
    "conditions": [
      {
        "type": "distinct_songs",
        "target": 150
      }
    ],
    "description": "Cover 150 different songs.",
    "icon": "🏆"
  }
];

  function uniquePersonIds(dances) {
    return new Set(
      (dances || [])
        .map(dance => dance.personId)
        .filter(Boolean)
    );
  }

  function evaluateGroupCompletion(achievement, dances) {
    const group = root.groups?.[achievement.groupId];

    if (!group) {
      return {
        unlocked: false,
        current: 0,
        total: 0,
        error: `Unknown group: ${achievement.groupId}`
      };
    }

    if (!group.membershipComplete) {
      return {
        unlocked: false,
        current: 0,
        total: group.memberIds?.length || 0,
        error: `Membership data for ${group.name} is not marked complete.`
      };
    }

    const covered = uniquePersonIds(dances);
    const requiredIds = group.memberIds || [];
    const coveredIds = requiredIds.filter(id => covered.has(id));
    const missingIds = requiredIds.filter(id => !covered.has(id));

    return {
      unlocked: requiredIds.length > 0 && missingIds.length === 0,
      current: coveredIds.length,
      total: requiredIds.length,
      coveredIds,
      missingIds,
      missingPeople: missingIds.map(id => root.people?.[id]?.name || id)
    };
  }

  function evaluateUniquePeople(achievement, dances) {
    const covered = uniquePersonIds(dances);
    const target = Number(achievement.target || 0);

    return {
      unlocked: target > 0 && covered.size >= target,
      current: Math.min(covered.size, target),
      actual: covered.size,
      total: target
    };
  }

  function countCoverMilestone(rule, dances, data) {
 const songs = new Set(), groups = new Set(), performances = new Set(), roles = new Map();
 const clean = value => String(value || '').normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase();
 for (const [i, dance] of (dances || []).entries()) {
  const group = data.groups?.[dance.groupId];
  const title = clean(dance.songTitle);
  const solo = data.resolveSoloArtistPersonId?.(dance.sourceArtistName);
  const source = group ? 'group:'+group.id : dance.projectId ? 'project:'+dance.projectId : solo ? 'solo:'+solo : clean(dance.sourceArtistName);
  if (title && source && (rule.type !== 'group_songs' || group?.id === rule.groupId)) {
   songs.add(JSON.stringify([source,title]));
  }
  if (group) groups.add(group.id);
  if (!dance.personId || clean(dance.roleName) === 'backup') continue;
  if (dance.personId === rule.personId) performances.add(dance.videoId || dance.id || i);
  if (group) {
   if (!roles.has(group.id)) roles.set(group.id,new Set());
   roles.get(group.id).add(dance.personId);
  }
 }
 if (rule.type === 'artist_times') return performances.size;
 if (rule.type === 'distinct_groups') return groups.size;
 if (rule.type === 'complete_groups') {
  return Object.values(data.groups || {}).filter(group => {
   const ids = new Set(group.memberIds);
   return group.membershipComplete && ids.size > 1 && [...ids].every(id => roles.get(group.id)?.has(id));
  }).length;
 }
 return songs.size;
}

  function evaluateRuleSet(achievement,dances,data){
 const results=achievement.conditions.map(rule=>{
  const rows=(dances||[]).filter(row=>(!rule.scopeGroup||row.groupId===rule.scopeGroup)&&(!rule.scopePerson||row.personId===rule.scopePerson));
  let total=rule.target, actual;
  if(rule.type==='cover_all_group_members'){
   const group=data.groups[rule.groupId],members=[...new Set(group?.memberIds||[])];
   const seen=new Set(rows.filter(d=>rule.legacyRoster||(d.groupId===rule.groupId&&String(d.roleName||'').toLowerCase()!=='backup')).map(d=>d.personId));
   total=members.length;actual=members.filter(id=>seen.has(id)).length;
   return {current:actual,total,unlocked:!!group?.membershipComplete&&total>(rule.legacyRoster?0:1)&&actual===total};
  }
  if(rule.type==='unique_people')actual=new Set(rows.map(d=>d.personId).filter(Boolean)).size;
  else actual=countCoverMilestone(rule,rows,data);
  return {current:Math.min(total,actual),total,unlocked:total>0&&actual>=total};
 });
 const done=results.filter(r=>r.unlocked).length,total=achievement.match==='any'?1:results.length;
 const progress=results.length===1?results[0]:{current:Math.min(done,total),total,unlocked:results.length>0&&done>=total};
 return {...achievement,...progress,conditionProgress:results};
}
function evaluateAchievement(achievement, dances) {
    if(achievement.type==='rule_set') return evaluateRuleSet(achievement,dances,root);
    if (['artist_times','distinct_groups','complete_groups','group_songs','distinct_songs'].includes(achievement.type)) {
      const actual = countCoverMilestone(achievement, dances, root);
      const total = achievement.target;
      return { ...achievement, actual, total, current: Math.min(actual,total), unlocked: total > 0 && actual >= total };
    }
    let progress;

    switch (achievement.type) {
      case "cover_all_group_members":
        progress = evaluateGroupCompletion(achievement, dances);
        break;

      case "unique_people":
        progress = evaluateUniquePeople(achievement, dances);
        break;

      default:
        progress = {
          unlocked: false,
          current: 0,
          total: 0,
          error: `Unsupported achievement type: ${achievement.type}`
        };
        break;
    }

    return {
      ...achievement,
      ...progress
    };
  }

  function evaluateAllAchievements(dances) {
    return achievements.map(achievement =>
      evaluateAchievement(achievement, dances)
    );
  }

  function getAchievement(achievementId) {
    return achievements.find(item => item.id === achievementId) || null;
  }

  function createGroupCompletionAchievement({
    id,
    title,
    description,
    groupId,
    icon = "🏆"
  }) {
    const group = root.groups?.[groupId];

    if (!group) {
      throw new Error(`Cannot create achievement: unknown group "${groupId}".`);
    }

    if (!group.membershipComplete) {
      throw new Error(
        `Cannot create achievement for "${group.name}" until its membership data is reviewed.`
      );
    }

    return {
      id,
      title,
      description,
      type: "cover_all_group_members",
      groupId,
      icon
    };
  }

  root.achievements = achievements;
  root.evaluateAchievement = evaluateAchievement;
  root.evaluateAllAchievements = evaluateAllAchievements;
  root.getAchievement = getAchievement;
  root.createGroupCompletionAchievement = createGroupCompletionAchievement;
})();
