import sys

MOD = 10**9 + 7

def main():
    data = sys.stdin.read().strip().split()
    if not data:
        return
    M = int(data[0])

    prev = [0] * (M + 1)
    prev[0] = 1
    U = [0] * (M + 1)
    # maintain sorted list of non-zero indices in prev to speed loops
    nz = [0]

    for v in range(1, M + 1):
        conv = [0] * (M + 1)
        p = prev  # local alias
        mod = MOD

        # sparse convolution: only iterate over non-zero indices
        for ia in nz:
            pa = p[ia]
            if pa == 0:
                continue
            for ib in nz:
                s = ia + ib
                if s > M:
                    break
                add = (pa * p[ib]) % mod
                x = conv[s] + add
                if x >= mod:
                    x -= mod
                conv[s] = x

        # update U[n] for n >= v by summing conv[t] for t = n-v, n-2v, ...
        for n in range(v, M + 1):
            acc = 0
            t = n - v
            while t >= 0:
                acc += conv[t]
                # avoid extremely large ints before mod
                if acc >= (1 << 62):
                    acc %= mod
                t -= v
            U[n] = (U[n] + (acc % mod)) % mod

        # curr = prev * (1 + x^v + x^{2v} + ...) via DP
        curr = prev[:]  # copy
        for s in range(v, M + 1):
            x = curr[s] + curr[s - v]
            if x >= mod:
                x -= mod
            curr[s] = x

        prev = curr
        # rebuild non-zero index list
        nz = [i for i, val in enumerate(prev) if val != 0]

    # output U[1..M]
    out = " ".join(str(U[i]) for i in range(1, M + 1))
    sys.stdout.write(out + "\n")

if __name__ == "__main__":
    main()
