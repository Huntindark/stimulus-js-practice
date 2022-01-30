import { Application } from '@hotwired/stimulus'
import TodoController from './controllers/todo_controller'
import RemoverController from './controllers/remover_controller'
import ClipboardController from './controllers/clipboard_controller'

application = Application.start()

application.register('todo', TodoController)
application.register('remover', RemoverController)
application.register('clipboard', ClipboardController)
