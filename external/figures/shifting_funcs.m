i = 1;
%% blank axes
figure(i)
plot([0 0],[-5 5],'k')
hold on
plot([-5 5],[0 0],'k')
grid on
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)

%% basic y = x^2  part 5(a)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,x.^2,'b','LineWidth',3)
AX = legend('y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% y = x^2 + 2  part 5(b)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,x.^2+2,'r',x,x.^2,'b--','LineWidth',3)
AX = legend('y = x^2+2','y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% y = (x+2)^2  part 5(c)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,(x+2).^2,'r',x,x.^2,'b--','LineWidth',3)
AX = legend('y = (x+2)^2','y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% y = 2x^2  part 5(d)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,2*x.^2,'r',x,x.^2,'b--','LineWidth',3)
AX = legend('y = 2x^2','y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% y = 2x^2 - 3  part 5(e)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,2*x.^2 - 3,'r',x,x.^2,'b--','LineWidth',3)
AX = legend('y = 2x^2 - 3','y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% y = -2x^2  part 5(f)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,-2*x.^2,'r',x,x.^2,'b--','LineWidth',3)
AX = legend('y = -2x^2','y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% y = 5-2x^2  part 5(g)
i = i+1;
figure(i)
x = -5:0.01:5;
plot(x,5-2*x.^2,'r',x,x.^2,'b--','LineWidth',3)
AX = legend('y = 5-2x^2','y = x^2');
AX.FontSize = 18;
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% h(t) for Q6
i = i+1;
figure(i)
x1 = [-4 -2];
y1 = [2 0];
x2 = [-2 0];
y2 = [0 2];
x3 = [0 2];
y3 = [2 2];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = h(t)','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% Q6(a)
i = i+1;
figure(i)
x1 = [-4 -2];
y1 = [4 2];
x2 = [-2 0];
y2 = [2 4];
x3 = [0 2];
y3 = [4 4];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = h(t)+2','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% Q6(b)
i = i+1;
figure(i)
x1 = [-4 -2];
y1 = [-2 0];
x2 = [-2 0];
y2 = [0 -2];
x3 = [0 2];
y3 = [-2 -2];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = -h(t)','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% Q6(c)
i = i+1;
figure(i)
x1 = [-4 -2];
y1 = [3 0];
x2 = [-2 0];
y2 = [0 3];
x3 = [0 2];
y3 = [3 3];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = 5 - h(t)','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% Q6(d)
i = i+1;
figure(i)
x1 = [-4 -2];
y1 = [4 0];
x2 = [-2 0];
y2 = [0 4];
x3 = [0 2];
y3 = [4 4];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = 2h(t)','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% Q6(e)
i = i+1;
figure(i)
x1 = [-1 1];
y1 = [2 0];
x2 = [1 3];
y2 = [0 2];
x3 = [3 5];
y3 = [2 2];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = h(t - 3)','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off

%% Q6(f)
i = i+1;
figure(i)
x1 = [-3 -1];
y1 = [1 3];
x2 = [-1 1];
y2 = [3 1];
x3 = [1 3];
y3 = [1 1];
plot(x1,y1,'b',x2,y2,'b',x3,y3,'b','LineWidth',3)
title('y = h(t)','FontSize',18)
hold on
grid on
axis([-5 5 -5 5])
xlabel('x','FontSize',18)
ylabel('y','FontSize',18)
plot([0 0],[-5 5],'k')
plot([-5 5],[0 0],'k')
hold off