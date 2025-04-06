export interface User {
  id: string;
  name: string;
  email: string;
  profilePic?: string;
  createdAt: string;
  fullName: string;

  // Add more fields as needed
}

export interface AuthImagePatternProps {
  title: string;
  subtitle: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ProfileData {
  name?: string;
  email?: string;
  profilePic?: string;

  // Add any additional fields for profile updates
}

export interface AuthStore {
  authUser: User | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  onlineUsers: string[]; // Array of online user IDs
  socket: any | null;

  checkAuth: () => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: ProfileData) => Promise<void>;
  connectSocket: () => void;
  disconnectSocket: () => void;
}
export interface AuthUser {
  profilePic?: string;
  fullName: string;
  email: string;
  createdAt: string;
}
