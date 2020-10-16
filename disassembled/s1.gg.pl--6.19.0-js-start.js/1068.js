E.config = {
  be: E.controllers.oD,
  Gua: E.core.ab.jl,
  hm: ["focus/share"],
  eh: E.core.fh.hG,
  Mh: {
    aol: {
      Mb: "aol",
      Bb: E.controllers.ru
    },
    "aol/user": {
      Mb: "aol/\\/[0-9]+",
      Bb: E.controllers.ru
    },
    "conference-profile/add/unknown": {
      Mb: "conference-profile\\/[a-z0-9]+\\/add",
      Bb: E.controllers.profile.bv
    },
    "conference-profile": {
      Mb: "conference-profile\\/[a-z0-9]+",
      Bb: E.controllers.profile.bv
    },
    conference: {
      Mb: "conference\\/[0-9]+",
      Bb: E.controllers.fC
    },
    profile: {
      Mb: "profile\\/[0-9]+$",
      Bb: E.controllers.profile.dv
    },
    contact: {
      Mb: "contact\\/[0-9]+",
      Bb: E.controllers.profile.IC
    },
    "contact/edit": {
      Mb: "user-contact\\/[0-9]+\\/edit",
      Bb: E.controllers.profile.Fn
    },
    "profile/edit": {
      Mb: "user-profile\\/[0-9]+\\/edit",
      Bb: E.controllers.profile.Fn
    },
    "profile/add": {
      Mb: "user-profile\\/[0-9]+\\/add",
      Bb: E.controllers.profile.Fn
    },
    "profile/accept-email-invitation": {
      Mb: "profile\\/[0-9]+\\/invitationId,[0-9]+\\/email,[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\\/token,[a-zA-Z0-9]{40}",
      Bb: E.controllers.profile.dv
    },
    "profile/accept-invitation": {
      Mb: "user-profile\\/[0-9]+\\/accept-invitation",
      Bb: E.controllers.profile.Fn
    },
    myprofile: {
      Mb: "profile$",
      Bb: E.controllers.profile.$E
    },
    latest: {
      Mb: "latest",
      Bb: E.controllers.AC
    },
    "roulette/others": {
      Mb: "roulette/others",
      Bb: E.controllers.dG
    },
    "roulette/search": {
      Mb: "roulette/search",
      Bb: E.controllers.fG
    },
    roulette: {
      Mb: "roulette$",
      Bb: E.controllers.aG
    },
    invitation: {
      Mb: "invitation",
      Bb: E.controllers.vF
    },
    notifications: {
      Mb: "notifications",
      Bb: E.controllers.Wv
    },
    notification: {
      Mb: "notification",
      Bb: E.controllers.Wv
    },
    search: {
      Mb: "search",
      Bb: E.controllers.uG
    },
    "default": {
      Mb: "",
      Bb: E.controllers.Sv
    },
    settings: {
      Mb: "settings(/.+){0,2}",
      Bb: E.controllers.AG
    },
    invitations: {
      Mb: "invitations",
      Bb: E.controllers.rE
    },
    error: {
      Mb: "error",
      Bb: E.controllers.VC
    },
    confirmation: {
      Mb: "confirmation(\\/.*)",
      Bb: E.controllers.lC
    },
    openuserchat: {
      Mb: "openchat/interlocutor/([a-z0-9]+|[0-9]+)$",
      Bb: E.controllers.AF
    },
    "redirect:foto/friends": {
      Mb: "(foto\\/friends)$",
      Bb: E.controllers.gl
    },
    "redirect:foto/friends/uin": {
      Mb: "(foto\\/friends\\/[0-9]+)$",
      Bb: E.controllers.gl
    },
    "redirect:foto": {
      Mb: "(foto)$",
      Bb: E.controllers.gl
    },
    "redirect:tanadugame": {
      Mb: "(tanadugame)$",
      Bb: E.controllers.gl
    },
    "redirect:drive": {
      Mb: "drive$",
      Bb: E.controllers.gl
    }
  },
  Rya: {
    iCa: E.api.Ob
  },
  Nk: {
    "template-1": {
      cls: "sr-template-1",
      jp: "sr-header-template-1"
    },
    "template-2": {
      cls: "sr-template-2",
      jp: "sr-header-template-2"
    },
    "template-3": {
      cls: "sr-template-settings",
      jp: "sr-header-template-settings"
    }
  },
  ab: {
    ph: "template-1",
    pI: "template-2",
    Pga: "template-3"
  },
  a6: {
    Px: "contacts:handle_invitation",
    Ria: "contacts:invite_by_cid",
    Oia: "contact-card:open",
    nga: "chat:open",
    Tga: "conference:open",
    ywa: "wallet:on_recharge",
    xwa: "wallet:on_activity_bonus"
  },
  Ga: {
    dx: {
      YEa: "1",
      Xya: "2",
      XEa: "3"
    }
  },
  animations: {
    status: {
      wj: {
        duration: 5000,
        interval: 500
      }
    }
  },
  NCa: 5000,
  mpa: 4900
};