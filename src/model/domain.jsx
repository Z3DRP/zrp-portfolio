export class Period {
  constructor(start, end) {
    this.id = undefined;
    this.startDate = start;
    this.endDate = end;
    this.length = undefined;
    this.type = undefined;
    this.isActive = undefined;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  setLength(len) {
    this.length = len;
    return this;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  setIsActive(active) {
    this.isActive = active;
    return this;
  }

  build() {
    if (!this.startDate || !this.endDate) {
      throw Error("start and end date are required");
    }
    return this;
  }
}

export class Task {
  constructor(start, end) {
    this.startTime = start;
    this.endTime = end;
    this.detail = undefined;
    this.method = undefined;
    this.tid = undefined;
    this.user = undefined;
    this.id = undefined;
  }

  setDetail(detail) {
    this.detail = detail;
    return this;
  }

  setMethod(method) {
    this.method = method;
    return this;
  }

  setTid(tid) {
    this.tid = tid;
    return this;
  }

  setUser(usr) {
    this.user = usr;
    return this;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  build() {
    if (!this.startTime || !this.endTime) {
      throw Error("start and end time are required");
    }
    return this;
  }
}

export class Schedule {
  constructor(availability, hourlyAgenda, daysAvailable, hoursAvailable) {
    this.availability = availability;
    this.hourlyAgenda = hourlyAgenda;
    this.daysAvailable = daysAvailable;
    this.hoursAvailable = hoursAvailable;
  }
}

export class HourlySchedule {
  constructor(hour, hour12Fmt, tasksByDay) {
    this.hour = hour;
    this.hour12Fmt = hour12Fmt;
    this.tasksByDay = tasksByDay;
  }
}

export class Availability {
  constructor(day, dayname, from, to, createdAt, newest) {
    this.day = day;
    this.dayName = dayname;
    this.AvailableFrom = from;
    this.AvailableTo = to;
    this.createdAt = createdAt;
    this.newest = newest;
    this.id = undefined;
  }

  setId(id) {
    this.id = id;
    return this;
  }

  build() {
    if (!this.day || !this.dayName || !this.from || !this.to) {
      throw Error("day, day name, from, and to are required");
    }
    return this;
  }
}
