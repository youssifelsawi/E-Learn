export const initialState = {
  currentPage: 'dashboard',
  darkMode: false,
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.postimg.cc/GpLh2fMD/profile.jpg',
    completedCourses: 12,
    currentCourses: 3,
    certificates: 8,
    totalHours: 156
  },
  wishlist: [],
  courses: [
    {
      id: 1,
      title: 'React Fundamentals',
      instructor: 'Sarah Johnson',
      duration: '8 hours',
      lessons: 24,
      rating: 4.8,
      students: 1234,
      price: 99,
      category: 'Programming',
      level: 'Beginner',
      thumbnail: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      progress: 75,
      enrolled: true,
      description: 'Learn the fundamentals of React including components, props, state, and hooks.',
      curriculum: [
        { id: 1, title: 'Introduction to React', duration: '30 min', completed: true, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 2, title: 'Components and JSX', duration: '45 min', completed: true, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 3, title: 'Props and State', duration: '60 min', completed: true, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 4, title: 'Event Handling', duration: '40 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 5, title: 'Hooks in React', duration: '90 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  }
      ]
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      instructor: 'Mike Chen',
      duration: '12 hours',
      lessons: 36,
      rating: 4.9,
      students: 2156,
      price: 149,
      category: 'Programming',
      level: 'Advanced',
      thumbnail: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      progress: 30,
      enrolled: true,
      description: 'Deep dive into advanced JavaScript concepts and modern ES6+ features.',
      curriculum: [
        { id: 1, title: 'Closures and Scope', duration: '45 min', completed: true, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 2, title: 'Async/Await', duration: '60 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 3, title: 'Modules and Imports', duration: '50 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  }
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      instructor: 'Emma Wilson',
      duration: '6 hours',
      lessons: 18,
      rating: 4.7,
      students: 892,
      price: 79,
      category: 'Design',
      level: 'Intermediate',
      thumbnail: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      progress: 0,
      enrolled: false,
      description: 'Master the principles of user interface and user experience design.',
      curriculum: [
        { id: 1, title: 'Design Thinking', duration: '40 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1" },
        { id: 2, title: 'Color Theory', duration: '35 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 3, title: 'Typography', duration: '45 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  }
      ]
    },
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'David Kumar',
      duration: '15 hours',
      lessons: 42,
      rating: 4.6,
      students: 3421,
      price: 199,
      category: 'Data Science',
      level: 'Intermediate',
      thumbnail: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      progress: 0,
      enrolled: false,
      description: 'Learn Python programming with focus on data analysis and machine learning.',
      curriculum: [
        { id: 1, title: 'Python Basics', duration: '60 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 2, title: 'NumPy and Pandas', duration: '90 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  },
        { id: 3, title: 'Data Visualization', duration: '75 min', completed: false, videoUrl: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs&index=1"  }
      ]
    }
  ],
  currentLesson: null,
  sidebarOpen: false,
  searchQuery: '',
  selectedCategory: 'all'
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'ENROLL_COURSE':
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === action.payload
            ? { ...course, enrolled: true, progress: 0 }
            : course
        )
      };
    case 'SET_CURRENT_LESSON':
      return { ...state, currentLesson: action.payload };
    case 'TOGGLE_LESSON_COMPLETION':
      return {
        ...state,
        courses: state.courses.map(course => ({
          ...course,
          curriculum: course.curriculum.map(lesson =>
            lesson.id === action.payload
              ? { ...lesson, completed: !lesson.completed }
              : lesson
          )
        }))
      };
    case 'UPDATE_USER_PROFILE':
      return { ...state, user: { ...state.user, ...action.payload } };
      
    case 'ADD_TO_WISHLIST':
      if (state.wishlist.includes(action.payload)) return state; // avoid duplicates
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(id => id !== action.payload)
      };

    case 'TOGGLE_WISHLIST':
      return state.wishlist.includes(action.payload)
        ? {
            ...state,
            wishlist: state.wishlist.filter(id => id !== action.payload)
          }
        : {
            ...state,
            wishlist: [...state.wishlist, action.payload]
          };

    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
      
    default:
      return state;
  }
}