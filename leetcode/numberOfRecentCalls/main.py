### Queue implementation
# ping(1) -> self.records = [1], self.start = 0 && 1<1-3000
# ping(100) -> self.records = [1, 100], self.start = 0 && 1<100-3000
# ping(3001) -> self.records = [1, 100, 3001], self.start = 0 && 1<3001-3000
# ping(3002) -> self.records = [1, 100, 3001, 3002], self.start = 0 && 1<3002-3000
  # so self.start should be now 1
###
class RecentCounter:

    def __init__(self):
        self.records = []
        self.start = 0

    def ping(self, t: int) -> int:
        self.records.append(t)
        while(self.records[self.start] < t-3000):
            self.start += 1
        return len(self.records) - self.start





# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)