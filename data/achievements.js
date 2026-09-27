// data/achievements.js
// Achievement definitions + generic evaluator.
// Achievements read canonical Person IDs / Group IDs; they never compare raw display names.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};

  const achievements = [
    {
      id: "twice_all_members",
      title: "ONE IN A MILLION",
      description: "Cover every officially debuted TWICE member at least once.",
      type: "cover_all_group_members",
      groupId: "twice",
      icon: "🏆"
    },

    {
      id: "unique_people_10",
      title: "People Collector I",
      description: "Cover 10 different people.",
      type: "unique_people",
      target: 10,
      icon: "✨"
    },

    {
      id: "unique_people_25",
      title: "People Collector II",
      description: "Cover 25 different people.",
      type: "unique_people",
      target: 25,
      icon: "🌟"
    },

    {
      id: "unique_people_50",
      title: "People Collector III",
      description: "Cover 50 different people.",
      type: "unique_people",
      target: 50,
      icon: "💫"
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

  function evaluateAchievement(achievement, dances) {
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
