// Firebase初期化（Remote Config + A/Bテスト用）
// APIキー等はWebアプリの公開設定値であり、Firebaseのセキュリティルールで保護されるため
// クライアントに露出しても問題ない（MemoLie-app/src/lib/firebase.ts と同一プロジェクト）
import { initializeApp, getApps, getApp } from "firebase/app";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
    apiKey: "AIzaSyBo8vO_-UUvA5jXi4IWB0E3QlEee58Sy6Y",
    authDomain: "memolie.firebaseapp.com",
    projectId: "memolie",
    storageBucket: "memolie.firebasestorage.app",
    messagingSenderId: "1011594057012",
    appId: "1:1011594057012:web:0adecce13fa886d26d4161",
    measurementId: "G-264LWRKMP9",
};

export function getFirebaseApp() {
    return getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
}

export function getFirebaseRemoteConfig() {
    const remoteConfig = getRemoteConfig(getFirebaseApp());
    remoteConfig.settings.minimumFetchIntervalMillis = 3600000; // 1時間（開発中はFirebaseコンソールの「今すぐ公開」で即時反映）
    remoteConfig.defaultConfig = {
        pain_point_variant: "score",
    };
    return remoteConfig;
}
