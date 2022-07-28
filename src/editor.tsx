import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Placeholder from '@tiptap/extension-placeholder'

// A new Y document
const ydoc = new Y.Doc()
// Registered with a WebRTC provider
const provider = new WebrtcProvider('example-document', ydoc)

export default () => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				// The Collaboration extension comes with its own history handling
				history: false,
			}),
			// Register the document with Tiptap
			Collaboration.configure({
				document: ydoc,
			}),

			// if you comment out the inclusion of CollaborationCursor, it works.
			CollaborationCursor.configure({
				provider: provider,
			}),
      Placeholder.configure({
        placeholder:
          'Write something … It’ll be shared with everyone else looking at this example.',
      }),
		],
	})
	return <div>
		<EditorContent editor={editor} />
	</div>
}
