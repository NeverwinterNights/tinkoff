import {AuthProvider} from "./src/providers/AuthProvider";
import {Navigation} from "./src/navigation/Navigation";
import {DataProvider} from "./src/providers/DataProvider";
import {StoryContainer} from "./src/components/StoryContainer";
import 'intl';
import 'intl/locale-data/jsonp/en';


export default function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <StoryContainer/>
                <Navigation/>
            </DataProvider>
        </AuthProvider>
    );
}

