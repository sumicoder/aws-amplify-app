import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
// AWS Amplify UIのスタイルをインポート
import '@aws-amplify/ui-react/styles.css';

// aws-exportsファイルをインポートし、Amplifyを設定
// @ts-ignore
import awsExports from './aws-exports.js';
Amplify.configure(awsExports);

// アプリのスタイルをインポート
import './App.css';

function App({ user, signOut }: { user?: any, signOut?: () => void }) {
    return (
        <>
            {user ? (
                <>
                    <h3>Hello {user.username}</h3>
                    <button onClick={signOut}>Sign Out</button>
                </>
            ) : (
                <h3>Please sign in</h3>
            )}
        </>
    );
}

export default withAuthenticator(App);
