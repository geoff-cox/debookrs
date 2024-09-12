%% h(t) = 3 - 3U(t-2)
i = 1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
plot([-2 2],[3 3],'b',[2 5],[0 0],'b','LineWidth',3)
hold off

%% j(t) = sin(t)*U(t)
i = i+1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
t = 0:0.01:5;
plot([-2 0],[0 0],'b',t,sin(t),'b','LineWidth',3)
hold off

%% k(t) = sin(t)*U(t - pi/2)
i = i+1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
t = (pi/2):0.01:5;
plot([-2 pi/2],[0 0],'b',t,sin(t),'b','LineWidth',3)
hold off

%% m(t) = U(t) - U(t-2)
i = i+1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
plot([-2 0],[0 0],'b',[0 2],[1 1],'b',[2 5],[0 0],'b','LineWidth',3)
hold off

%% n(t) = 3U(t) - 2U(t-1)
i = i+1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
plot([-2 0],[0 0],'b',[0 1],[3 3],'b',[1 5],[1 1],'b','LineWidth',3)
hold off

%% q(t) = U(t) - U(t-1) + 3U(t-2)
i = i+1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
plot([-2 0],[0 0],'b',[0 1],[1 1],'b',[1 2],[0 0],'b',...
     [2 5],[3 3],'b','LineWidth',3)
hold off

%% r(t) = t - t*U(t-2) + U(t-3)
i = i+1;
figure(i)
plot([-2 5],[0 0],'k',[0,0],[-3 3],'k')
hold on
axis([-2 5 -3 3])
grid on
plot([-2 2],[-2 2],'b',[2 3],[0 0],'b',[3 5],[1 1],'b','LineWidth',3)
hold off
