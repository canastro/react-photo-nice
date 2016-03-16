import React from 'react';
import { render } from 'react-dom';

import PhotoNice from '../app/components/photo-nice';

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
    <PhotoNice />
), document.getElementById('app'));
