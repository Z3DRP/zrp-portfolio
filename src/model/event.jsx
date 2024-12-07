export class Event {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }
}

export class FetchScheduleEvent {
  constructor(start, end) {
    this.periodStart = start;
    this.periodEnd = end;
  }
}

export class BroadcastScheduleEvent {
  constructor(currentPeriod, agenda) {
    this.currentPeriod = currentPeriod;
    this.agenda = agenda;
  }
}

export class UpsertTaskEvent {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.detail = undefined;
    this.uid = undefined;
    this.usrName = undefined;
    this.tid = undefined;
    this.company = undefined;
    this.email = undefined;
    this.phone = undefined;
    this.roles = undefined;
  }

  setDetail(detail) {
    this.detail = detail;
    return this;
  }

  setUid(uid) {
    this.uid = uid;
    return this;
  }

  setUsrName(userName) {
    this.usrName = userName;
    return this;
  }

  setTid(tid) {
    this.tid = tid;
    return this;
  }

  setCompany(company) {
    this.company = company;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
    return this;
  }

  setRoles(roles) {
    this.roles = roles;
    return this;
  }

  build() {
    if (!this.startTime || !this.endTime) {
      throw Error("Start time and end time are required");
    }
    return this;
  }
}

export class InsertTaskResponseEvent {
  constructor(result, nwTask) {
    this.result = result;
    this.newTask = nwTask;
  }
}

export class UpdateTaskResponseEvent {
  constructor(matchCount, updateCount, task) {
    this.matchedCount = matchCount;
    this.updateCount = updateCount;
    this.task = task;
  }
}

export class RemoveTaskEvent {
  constructor(uid, tid) {
    this.uid = uid;
    this.tid = tid;
  }
}

export class TaskRemovedResponse {
  constructor(tid, delCount) {
    this.tid = tid;
    this.deletedCount = delCount;
  }
}

//EventFetchSchedule     = "fetch_schedule"
//EventBroadcastSchedule = "broadcast_schedule"
//EventCreateTask        = "create_task"
//EventUpdateTask        = "update_task"
//EventRemoveTask        = "remove_task"
//EventUpdateResponse = "update_response"
//EventInsertResponse = 'insert_response'
//EventRemovedResponse = 'remove_response'
