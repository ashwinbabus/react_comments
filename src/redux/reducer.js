import Actions from "./action.types";
import Jen from "../assets/6.png"
import Ell from "../assets/2.png"
import Ste from "../assets/3.png"
import Chr from "../assets/4.png"
import Mat from "../assets/5.png"

const INITIAL_STATE = {
  users: [
    {
      uid: "user_001",
      name: "Jenny Hess",
      pic: Jen,
    },
    {
      uid: "user_002",
      name: "Elliot Fu",
      pic: Ell,
    },
    {
      uid: "user_003",
      name: "Steve Feliciano",
      pic: Ste,
    },
    {
      uid: "user_004",
      name: "Christian Slater",
      pic: Chr,
    },
    {
      uid: "user_005",
      name: "Matt Leblanc",
      pic: Mat,
    },
  ],

  current_user: {
    uid: "user_001",
    name: "Jenny Hess",
    pic: "Jen",
  },

  comments: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };
    
    case Actions.SET_CURR_USER :
      return {
        ...state,
        current_user : action.user
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
