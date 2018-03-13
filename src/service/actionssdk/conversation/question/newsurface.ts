/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Api from '../../api/v2'
import { SoloQuestion } from './question'
import { toArray } from '../../../../common'

/** @public */
export type NewSurfaceArgument = boolean

/** @public */
export interface NewSurfaceOptions {
  /** @public */
  capabilities: string | string[]

  /** @public */
  context: string

  /** @public */
  notification: string
}

/** @public */
export class NewSurface extends SoloQuestion {
  constructor(options: NewSurfaceOptions) {
    super('actions.intent.NEW_SURFACE')

    this.data<Api.GoogleActionsV2NewSurfaceValueSpec>(
      'type.googleapis.com/google.actions.v2.NewSurfaceValueSpec', {
      capabilities: toArray(options.capabilities),
      context: options.context,
      notificationTitle: options.notification,
    })
  }
}