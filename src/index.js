import { Application } from '@hotwired/stimulus'
import ExampleController from './controllers/example_controller'

application = Application.start()

application.register('example', ExampleController)
